#### 观察者模式
```
 观察者模式是
```

#### 观察者模式组成部分
```
1 主体 维护了一组观察者，有助于添加和删除观察者
2 观察者 为主体中每当状态改变就需要被通知到的对象提供一个更新的接口
3 具体主体  在状态改变时，向观察者发出通知，存储具体观察者的状态
4 具体观察者 存储具体主体的引用，为观察者实现更新的接口，确保与主体状态的一致性
```