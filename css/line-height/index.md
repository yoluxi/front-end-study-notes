### line-height  

#### 1 line-height: 150% 与  line-height: 1.5 
```
    ① 子元素设置line-height 并且设置font-size 
      line-height: 1.5 
      计算后的line-height = 该元素的font-size * 1.5 

      line-height: 150%
      计算后的line-height = 该元素的font-size * 1.5  
      发现没什么区别 。。。 
```

```
  ② 父元素设置line-height 子元素仅设置font-size 
    line-height: 1.5 
    计算后子元素的line-height = 子元素 * 1.5  

    line-height: 150% 
    计算后子元素的line-height = 从父元素继承到的line-height  

    结论：两种表达式继承方式不同  1.5是让子元素继承该值  由子元素计算后得到line-height   150% 子元素直接继承到父元素的line-height 
```


#### 2 line-height 与 line boxes 
```
 如果标签内没有设置height 该高度是由line-height 起的作用  
  
 inline box模型当中 有个line boxes用来包裹每行文字，而他只有一个高度的特性  所以没有设置高度的div 高度就由line boxes的高度决定 



 line boxes决定着高度跟line-height的关系是什么呢？ 
 line boxes 内部又包含着inline boxes 如文字 span 图片这类inline 属性的标签 这些标签谁的line-height高  就最后决定着line boxes的高度

```


#### 3 使用行高代替高度避免haslayout
```
 如果一个行内元素包裹可一个块元素  给该块元素添加line-height 可以避免haslayout  
```

