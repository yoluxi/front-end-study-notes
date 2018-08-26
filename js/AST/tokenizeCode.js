/**
 * 分词
 * 
 * @param {String} code  代码字符串 
 */

function tokenizeCode (code) {
    const tokens = [];  // 结果数组
    for (let i = 0; i < code.length; i++) {
        // 从0开始 一个字符一个字符的读取
        let currentChar = code.charAt(i);

        // 对于这种只有一个字符的语法单元  直接添加到结果数组中
        if (currentChar === ';') {
            tokens.push({
                type: 'sep',
                value: ';'
            })

            // 该字符得到了解析 不需要做后续判断 直接开始下一个
            continue;
        }

        if (currentChar === '(' || currentChar === ')') {
            // 与 ； 类似，只是语法单元类型不同
            tokens.push({
                type: 'parens',
                value: currentChar
            })
            continue;
        }

        if (currentChar === '{' || currentChar === '}') {
            tokens.push({
                type: 'brace',
                value: currentChar
            })
            continue;
        }

        if (currentChar === '>' || currentChar === '<') {
            tokens.push({
                type: 'operator',
                value: currentChar
            })
            continue;
        }


        if (currentChar === '""' || currentChar === '\'') {
            // 引号表示一个字符串的开始
            const token = {
                type: 'string',
                value: currentChar
            }

            tokens.push(token);

            const closer = currentChar;
            let escaped = false; // 表示下一个字符是不是被转译的

            // 进行嵌套循环遍历 寻找字符串结尾
            for (i++; i < code.length; i++) {
                currentChar = code.charAt(i);
                // 先将当前的遍历到的字符串 无条件的加到字符串内容中去
                token.value += currentChar;

                if (escaped) {
                    // 如果当前转译状态是true 就改为false 然后不特殊处理这个字符
                    escaped = false;
                } else if (currentChar === '\\') {
                    // 如果当前字符是 \ 就将转译状态设为true  下一个字符不会被特殊处理
                    escaped = true;
                } else if (currentChar == closer){
                    break;
                }
            }
            continue;
        }

        if (/[0-9]/.test(currentChar)) {
            // 数字
            const token = {
                type: 'number',
                value: currentChar
            }
            tokens.push(token);

            for (i++;  i < code.length; i++) {
                currentChar = code.charAt(i);
                if (/[0-9\.]/.test(currentChar)) {
                    // 如果遍历到的字符如果还是数字的一部分([0-9]和.）
                    // 暂时不考虑多点和其他进制的情况
                    token.value += currentChar;
                } else {
                    // 如果不是数字就停止
                    // i会退一步，应为当前这个字符不是数字
                    i--;
                    break;
                }
            }
            continue;
        }

        if (/[a-zA-Z\_\$]/.test(currentChar)) {
            const token = {
                type: 'identifier',
                value: currentChar
            }

            tokens.push(token);

            // 与数字同理
            for (i++; i < code.length; i++) {
                currentChar = code.charAt(i);
                if (/[a-zA-z\_\$]/.test(currentChar)) {
                    token.value += currentChar;
                } else {
                    i--;
                    break;
                }
            }
            continue;
        }

        if (/\s/.test(currentChar)) {
            const token = {
                type: 'whitespace',
                value: currentChar
            }
            tokens.push(token);

            for (i++; i < code.length; i++) {
                currentChar = code.charAt(i);
                if (/\s/.test(currentChar)) {
                    token.value += currentChar
                } else {
                    i--;
                    break;
                }
            }
            continue;
        }

        //todo 其他类型的语法单元

        // 遇到其他情况就抛出异常
        throw new Error('Unexpected' + '\n' + currentChar)
    }
    return tokens;
}

const tokens = tokenizeCode(
    `if (1 > 0) {
        alert("if 1 > 0")
    }`
)

// result 
/**
 * [
 { type: "whitespace", value: "\n" },
 { type: "identifier", value: "if" },
 { type: "whitespace", value: " " },
 { type: "parens", value: "(" },
 { type: "number", value: "1" },
 { type: "whitespace", value: " " },
 { type: "operator", value: ">" },
 { type: "whitespace", value: " " },
 { type: "number", value: "0" },
 { type: "parens", value: ")" },
 { type: "whitespace", value: " " },
 { type: "brace", value: "{" },
 { type: "whitespace", value: "\n " },
 { type: "identifier", value: "alert" },
 { type: "parens", value: "(" },
 { type: "string", value: "\"if 1 > 0\"" },
 { type: "parens", value: ")" },
 { type: "sep", value: ";" },
 { type: "whitespace", value: "\n" },
 { type: "brace", value: "}" },
 { type: "whitespace", value: "\n" },
]
 */


 