// 计算年终奖  S = 4倍  A = 3倍  B = 2倍
var proformanceS = function() {}
proformanceS.prototype.calculate = function(salary) {
    return salary * 4
}

var proformanceA = function() {}
proformanceA.prototype.calculate = function(salary) {
    return salary * 3
}

var proformanceB = function() {}
proformanceB.prototype.calculate = function(salary) {
    return salary * 2
}


// 奖金类 
var Bonus = function() {
    this.salary = null // 原始工资
    this.strategy = null // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function(salary) {
    this.salary = salary  // 设置员工的初始工资
}

Bonus.prototype.setStrategy = function(strategy) {
    this.strategy = strategy // 设置策略对象
}

Bonus.prototype.getBonus = function() { 
    return this.strategy.calculate(this.salary) // 把计算奖金的操纵委托给对应的策略对象
}


