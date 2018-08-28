// 节点
function Node(data, pre, next) {
    this.data = data;
    this.preNode = pre;
    if (this.preNode) {
        pre.nextNode = this;
    }
    this.nextNode = next;
}

// 从某一个节点开始打印链表
Node.prototype.print = function() {
    if (this.nextNode) {
        return this.data.name + this.nextNode.print()
    } else {
        return this.data.name;
    }
}


// 从某一节点的后面开始插入节点
Node.prototype.insertNode = function(node) {
    if (this.nextNode && this.nextNode.preNode) {
        this.nextNode.preNode = node;
    }
    node.nextNode = this.nextNode;
    node.preNode = this;
    this.nextNode = node;
}

// 删除某一个节点
Node.prototype.deleteNode = function() {
    this.nextNode.preNode = this.preNode
    this.preNode.nextNode = this.nextNode
}

Node.prototype.reverseSort = function() {
    var temp = null; // {nextNode: null, preNode: null}
    function revert() {
        if (!this.nextNode) {
            this.preNode = null
            this.nextNode = temp;
            return this;
        } else {
            this.preNode = this.nextNode;
            this.nextNode = temp;
            temp = this;
            return revert.call(this.preNode)
        }
    }
    return revert.call(this)
}

// 测试
var node1 = new Node({"name": "1"}, null, null);
var node2 = new Node({"name": "2"}, node1, null);
var node3 = new Node({"name": "3"}, node2, null);
var node4 = new Node({"name": "4"}, node3, null);

// var head = node1;
// console.log(node1.print())

var head = node1;
console.log(node1.print())
console.log(head.reverseSort())

