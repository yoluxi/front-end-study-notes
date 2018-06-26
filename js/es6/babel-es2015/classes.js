// 类只是一个语法糖  通过class关键字让语法更接近传统的面向对象模式 本质还是基于原型的
// 类支持基于原型的继承 调用父类的构造函数 生成实例，静态方法和构造函数

class SkinnedMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        super(geometry, materials)
        this.idMatrix = SkinnedMesh.defaultMatrix()
        this.bones = []
        this.bonesMatrix = []
    }

    update() {

    }

    // 静态方法
    static defaultMatrix() {
        return new THREE.Matrix4()
    }
}
