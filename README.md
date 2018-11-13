> [掘金专栏](https://juejin.im/post/5be54e04f265da611c267b19)

# 用Vue开发仿旅游站webapp项目总结

## 成果预览
仅实现项目首页、项目详情页、城市列表页组件的页面/逻辑。

[千万别点我](http://www.ptuyxr.cn/travel/)

## 项目初始化
先用脚手架生成项目框架。

因为做的是一个移动端网页，所以我们可以有一些配置：

### 第一步 配置meta标签
index.html里加个 `meta` 标签:

```
<meta name="viewport"content="width=device-width,initial-scale=1.0,
    minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

在网页的`<head>`标签中增加以上代码，可以让网页的宽度自动适应手机屏幕的宽度。

其中：

width=device-width ： 表示宽度是设备屏幕的宽度

initial-scale=1.0 ： 表示初始的缩放比例

minimum-scale=1.0 ： 表示最小的缩放比例

maximum-scale=1.0 ： 表示最大的缩放比例

user-scalable=no ： 表示用户是否可以调整缩放比例

以上我设置的参数的目的是：想要一打开网页，就自动以原始比例显示，并且不允许用户修改，不允许用户缩放。

### 第二步 初始化默认样式
在不同的手机浏览器上，默认的一些样式是不同统一的。我们需要把这些不同手机的初始化样式做一个统一。

所以可以引入个 **reset.css**

这是一个初始化的代码，其中一些初始化配置可以自行根据需求修改。

![](https://user-gold-cdn.xitu.io/2018/11/10/166fc4e490bd15ef?w=966&h=648&f=png&s=178760)

想看/拿代码的可以到我[Github](https://github.com/YxrSadhu/vue-travel)上拿：src/assets/styles/reset.css

### 第三步 解决1像素边框方案
在移动端页面开发，常常有个 **1像素边框** 的问题。

也就是有的手机屏幕分辨率比较高，如果我们在页面上写border-bottom啥的样式，会导致这些手机屏幕分辨率高的当中，1px边框显示成2px边框或3px边框等显示成多像素。

为了解决这个1像素边框问题，我们就引入了 **border.css**（貌似这是哪个团队提出的解决方案？忘记啦，只知道怎么用...但仍然要表示感谢。还有其他解决方案，这个就自行搜索了。）

![](https://user-gold-cdn.xitu.io/2018/11/12/167072008e20e2e6?w=873&h=912&f=png&s=61851)

两百多行不贴出来了，想看/拿完整代码的可以到我[Github](https://github.com/YxrSadhu/vue-travel)上：src/assets/styles/border.css

具体这个解决方案的用法，看过border.css代码的同志就会发现很简单：在元素上根据想要的需求加以下这些类名。

![](https://user-gold-cdn.xitu.io/2018/11/12/167073c03054803f?w=310&h=381&f=png&s=18472)

按照字面意思理解就行。

比如要给一个元素加上一像素的下边框，就直接加个类名：`<div class="border-bottom>"`就行了。

要给一个元素加上一像素的上边框和下边框，就直接加类名：`<div class="border-topbottom">`就行了。

边框也可以改颜色的，举个项目中的例子，按照这种格式去改颜色（本文例子有css代码的话基本都是stylus的写法）：


![](https://user-gold-cdn.xitu.io/2018/11/12/16707b244c693674?w=494&h=36&f=png&s=4854)


![](https://user-gold-cdn.xitu.io/2018/11/12/16707b4c704c89eb?w=238&h=121&f=png&s=6540)

对应页面：

![](https://user-gold-cdn.xitu.io/2018/11/12/16707b86a04b04f4?w=482&h=95&f=png&s=4016)

### 第四步 引入fastclick库
在移动端开发中，某些机型、某些浏览器上，click点击事件要延迟300ms执行。

要解决这个问题，我们引入个fastclick库

`npm install fastclick --save`

--save的意思是：不管在开发环境测试，还是线上跑代码，安装了的库都可以使用。并且下载好后，自动存到package.json的dependencies属性中，比如这里install的fastclick：

![](https://user-gold-cdn.xitu.io/2018/11/12/16707c1f711cf15a?w=350&h=292&f=png&s=19481)

然后在入口函数main.js中引入和使用：

`import fastClick from 'fastclick'`、
`fastClick.attach(document.body)`

![](https://user-gold-cdn.xitu.io/2018/11/12/16707c8ea2abc1bc?w=516&h=269&f=png&s=22114)

### 第五步 配置使用iconfont
先在[阿里巴巴矢量图标库](http://www.iconfont.cn/)创建一个项目

然后在iconfont上选购，添加到购物车，选好后添加到自己的项目，然后下载到本地。

下载的东西中只要用到这几个：

![](https://user-gold-cdn.xitu.io/2018/11/12/167080253c9ce60e?w=368&h=190&f=png&s=9868)

然后把iconfont.css放到一个文件夹中并且在入口函数main.js处引入后就可以全局使用了。

举个使用的例子:

![](https://user-gold-cdn.xitu.io/2018/11/12/1670803d4f29a9ad?w=508&h=233&f=png&s=25806)

注意类名要加iconfont，然后这里在span里输入的代码就是你选中的图标的代码：

![](https://user-gold-cdn.xitu.io/2018/11/12/1670807393af966b?w=272&h=169&f=png&s=6020)

### 第六步 自定义目录
这步其实应该穿插在做项目过程中进行的，这里先列出来。


在build文件夹下的webpack.base.conf.js中配置，如下图，圈起来的是我在项目中配置的。

![](https://user-gold-cdn.xitu.io/2018/11/12/167080a6e59fb776?w=1045&h=721&f=png&s=107000)

这样有配置后就可以使用自定义目录了。比如按照我上面的配置的话

`import src/assets/styles/border.css`

就可以写成

`import styles/border.css`了。
## 首页开发中想记录下来的
### 轮播插件
#### 安装与使用
这里使用的是 vue-awesome-swiper。

![](https://user-gold-cdn.xitu.io/2018/11/12/167080f562ff71b7?w=924&h=766&f=png&s=91934)

先安装： npm install vue-awesome-swiper --save<br>
然后用法一些的其实都可以在其文档中查阅到：

![](https://user-gold-cdn.xitu.io/2018/11/12/16708110e70c2141?w=1253&h=746&f=png&s=57459)
鉴于在各个页面都可能会用到轮播功能,所以直接在全局也就是入口文件 main.js 处引入。

![](https://user-gold-cdn.xitu.io/2018/11/12/1670811e89272062?w=549&h=630&f=png&s=59897)

然后使用：


![](https://user-gold-cdn.xitu.io/2018/11/12/16708196a2ff73b8?w=951&h=851&f=png&s=95048)

比如要使用按钮区的话，就需要配置参数。根据个人在项目中的需求，可以查阅其github文档按需使用。

#### 这里值得一提的是：假如在轮播图的下面有东西

![](https://user-gold-cdn.xitu.io/2018/11/12/167081d54eacc6ae?w=764&h=431&f=png&s=185938)

比如这个test。在网速慢慢加载的时候，可能test会先在上面显示，然后等图片撑开区域的时候再跑回下面。

为了防止这种抖动，最好这样子做：

给轮播swiper外面套一层类为wrapper的div，然后给div固定大小。比如在项目中这里的轮播图片的宽高比是 364:97 约等于 3.75，高度是宽度的百分之 26.6。

所以响应式开发可以这样给div框样式：

![](https://user-gold-cdn.xitu.io/2018/11/12/167082031e49643a?w=280&h=208&f=png&s=12245)
现在vw单位的兼容性其实可以了。

有种兼容性很好的方案：
```
overflow: hidden
width: 100%
height: 0
padding-bottom: 26.6%
```
这种方式也是高度是宽度的 26.6%。

其实吧。。这个vue-aowsome-swiper组件目前为止已经不存在这种抖动问题了。。

#### 还有个改变插件默认颜色的问题
比如插件按钮区配置后，默认按钮颜色是蓝色小圆点。

![](https://user-gold-cdn.xitu.io/2018/11/12/16708286f4dfea05?w=562&h=301&f=png&s=178374)

审查元素可以看出：

![](https://user-gold-cdn.xitu.io/2018/11/12/16708290e8b9446f?w=1162&h=637&f=png&s=443154)

那我们如下这样子加样式去改变行吗？

![](https://user-gold-cdn.xitu.io/2018/11/12/167082990bd8a7ae?w=438&h=269&f=png&s=18252)

一般这样子问都是不行滴...

因为有scoped作用域的原因，这个类的属性的设置是在原本的 swiper组件下，而不是在我们这里设置的swiper组件下。

应该这样设置：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670a7ac7491953c?w=658&h=335&f=png&s=23366)

意思是在.wrapper下的所有类中，找.swiper-pagination-bullet-active类。

`>>>`是具有穿透作用域的意思，穿透其他组件的作用域。

### 如果文字在一行中多了，实现省略号效果

![](https://user-gold-cdn.xitu.io/2018/11/13/1670ab0ad89861a2?w=469&h=296&f=jpeg&s=35007)

比如，这里是个p标签。

P标签里的数据太多的话   希望显示一个  ...  省略号。

可以这样利用text-overflow属性:

![](https://user-gold-cdn.xitu.io/2018/11/13/1670ab35e0792484?w=1241&h=449&f=png&s=50457)

要实现溢出时产生省略号的效果，应该在定义两个样式：强制文本在一行内显示（white-space:nowrap）和溢出内容为隐藏（overflow:hidden），只有这样才能实现溢出文本显示为省略号效果。

![](https://user-gold-cdn.xitu.io/2018/11/13/1670ab5896d97f4a?w=290&h=299&f=png&s=9281)

![](https://user-gold-cdn.xitu.io/2018/11/13/1670ab5d8a305f5f?w=439&h=375&f=png&s=208084)

### 发送ajax请求
一般情况下在mounted钩子里发送ajax请求数据。想详细了解生命周期 => 我有写过[一篇文章](http://www.ptuyxr.cn/2018/10/29/%E8%81%8A%E8%81%8Avue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F/)

请求方式，看自己，这个项目中axios、fetch两个方式我都写过。

#### 配置
首先，用vue脚手架工具生成的工程里面，只有static目录（静态文件目录）下，才能被外界访问到。

我们就把本地的一些模拟数据放在这个static目录下，自己建个文件夹存储数据。这个项目中是static/mock/index.json：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670b4070b053755?w=586&h=279&f=png&s=15154)

这数据是本地的模拟数据，我们不希望到时候一起把它push到线上，可以在.gitignore里这样配置：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670b422f13511f7?w=732&h=859&f=png&s=75652)

现在这个文件夹下的所有东西都不会被传到线上了。

当然，也不会提交到本地的git仓库里面。

这样配置还不够，目前在局部根组件中写的请求的路径是这样的，拿项目中举例：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670b5391b9e459b?w=619&h=368&f=png&s=49560)

当我们上线这代码的时候，我们请求的网址，最好前面加上个‘api’，如下面的红框中：/api/index.json  这样子最好了。

很好的是，恰好Vue脚手架里面有这样一个转发的代理功能。通过这个功能，就可以实现以上构想。

config配置文件下，有个 index.js 脚本，官方给我们提供了一个 proxyTable{} 的配置项，我们可以这样配置：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670b5df73c6123a?w=935&h=577&f=png&s=84372)

这意思是：当我们请求api的时候，依然映射到本地8080端口，然后访问任何以api为开头的url的时候，做一个路径替换，代理访问到 /static/mock 处。

实际这功能  是webpack-dev-sever提供的。

改过配置文件，需要重启下服务器，重启后就可以如下请求数据了：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670b62c53c45ee8?w=458&h=72&f=png&s=9459)

这里实际上访问的就是static/mock/index.json里的内容了。

#### 优化
如果可以的话，最好能在局部**根组件**里请求一次ajax数据，然后从局部根组件里把接收到的数据**分别传给**各个局部的**子组件**，而不是每个局部的子组件都发送一次ajax请求。

## 城市列表页开发中想记录下来的
### 记box-sizing:border-box的一个应用场景

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be0f1dd4a68c?w=511&h=146&f=png&s=5229)

这里是这样写的css

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be1590a00d0a?w=600&h=411&f=png&s=34750)

现在在输入框里面输入文字字符超过输入框大小时：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be1b71cbc7e8?w=536&h=187&f=png&s=6075)

这两部会贴着,不那么好看。想要给这个输入框加个padding，留点间隙会更好。

但直接在input下面加行吗？

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be2c62b03e77?w=463&h=351&f=png&s=28762)

页面：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be338a12fc6e?w=552&h=190&f=png&s=6008)

因为包裹input框的div没设置width，也就是width是auto。input框的width设置的是100%。

如果直接给input加padding左右一点的话是会撑开input框的宽度的。所以会溢出。

那怎样解决这个问题呢？

我们只是想设置一个左右padding值，没想让input框长宽变化。所以，我们在 Input 下面加个：`box-sizing: border-box`

这样的话，我们直接给input设置的宽高就包括了padding、border在内的宽高了。

此时我们要修改padding的值的话，就只会在这个框内变化  不会撑开框宽高了。

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be70ce33495d?w=466&h=388&f=png&s=34239)

![](https://user-gold-cdn.xitu.io/2018/11/13/1670be750e62862c?w=540&h=215&f=png&s=7302)

### 在列表栏用第三方插件 better-scroll
初始开发页面时，到这步，因为加了比较多字母对应的区域，页面出现了滚动条的时候：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c0e52cba72cb?w=634&h=691&f=png&s=27597)

为了使用better-scroll库，我们仅让列表区域显示到刚进页面时能显示到的区域就行了，不需要出现滚动条。所以可以给最外层的包裹整个列表区域的框div.list 加个`overflow: hidden`就行了。（整个列表页指下图中的从当前城市开始到最后，城市选择和输入框是其他子组件写的了）

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c1583950f129?w=553&h=756&f=png&s=28435)

接下来具体better-scroll的用法，github上其文档有说明，各人可根据具体情况查阅使用。

### 字母表的逻辑实现思路
点击事件中，我们需要查看点击的内容时，可以利用点击事件的**事件对象**

在Vue的一个点击事件里，在methods定义点击方法时这个方法可以接收一个参数e，e就是我们点击到的那个事件对象。

要拿到我们点击到的事件对象的内容  可以这样来：`e.target.innerText`

举个项目中的例子验证一下：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c25ff5292ac1?w=311&h=70&f=png&s=3993)
![](https://user-gold-cdn.xitu.io/2018/11/13/1670c2634e669504?w=415&h=117&f=png&s=9549)

比如此时页面上点击了  D F J

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c26a644e9d2d?w=562&h=283&f=png&s=13555)

#### 需求1
当点击到相应的字母的时候显示list组件的对应城市的区域。

better-scroll这个第三方插件有个方法可以实现这个需求，思路是：

监听所点击的字母表里字母的值letter的变化，一旦letter变了，就利用better-scroll的提供的一个接口，如下图划线的部分
![](https://user-gold-cdn.xitu.io/2018/11/13/1670c3fbace0cd09?w=517&h=156&f=png&s=11041)
它会让better-scroll的滚动区域，自动滚动到某一个元素上。需要给这个方法传递我们滚动到该元素的该元素DOM。

利用这个思路就可以实现需求1了。
#### 需求2
手指拖动字母表，字母对应的列表跟着**联动**展示。

思路：

利用touchstart、touchmove、touchend事件，并给个限制（touchStatus）   只当手指在屏幕移动的时候才执行一些操作。然后用个数组letters来存放字母表的所有字母，这里的letters大概是['A','B','C'...]，并让页面v-for这个letters来显示相应的内容。用数组存放这些字母的原因也是为了实现这需求的主要思想：**根据下标，找到对应的字母**。

接下来，先用offsetTop找到字母表中字母A距离包裹它的顶部的高度。下图红框。


![](https://user-gold-cdn.xitu.io/2018/11/13/1670c5c0969d10ff?w=910&h=574&f=png&s=47789)

这里的74 代表的是红色方框的高度。

然后获取移动时手指所在的高度，此高度时针对于客户端的高度，用clientY。
touchmove事件有个事件对象，事件对象里有个touches数组，touches[0]里面就有当前手指的信息，包括clientY属性。

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c5e02f7fbcfb?w=1128&h=249&f=png&s=43281)

实时获取我们手指的位置。

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c5e515c959b9?w=1170&h=745&f=png&s=124769)

我们要获取距离包裹块的高度 => 也就是clientY的高度要减去headers区和serach区的高度，这两个区高度是 79px。

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c6034e12154c?w=453&h=70&f=png&s=9967)

然后算我们手指移到的字母在数组中的下标 逻辑是 <font color="#dd0000">(touchY - startY)/每个字母的高度，再把结果向下取个整。</font> 

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c65059482b4c?w=1040&h=138&f=png&s=24393)

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c65368730cd9?w=481&h=504&f=png&s=31780)

最后，把这个下标在letters数组中对应的字母传给需求1所在的组件利用需求1的思路就行了。（这里的传值涉及到了兄弟组件之间的传值，此时该页面比较简单不建议用vuex，可以用event bus/找同一父组件做媒介传值，具体方法百度。）

在我项目中最终逻辑代码是这样写的：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c68ff32c2b27?w=1228&h=460&f=png&s=91765)

最后做个最佳实践，用个if，确保 index的值。

### 性能优化
**第一处**

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c7161a6820b1?w=724&h=499&f=png&s=82209)
handleTouchMove是手指滑动的时候就会执行，而我们框起来的也就是A字母距离包裹框的高度是固定的，不用每次滑动的都执行这段代码。

所以此处需要优化，这样子来：

在data里初始化startY为0 

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c72cfa8f8546?w=356&h=180&f=png&s=8454)

然后用生命周期钩子 updated 去执行给startY赋值的语句

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c73463a6eaaf?w=500&h=242&f=png&s=14674)

这里为什么用updated这个钩子呢？在项目中初次渲染字母表组件alphabet.vue的时候，从它父组件City.vue传过来的值是一个空对象。当City.vue里ajax动态获取数据后，从City再传到alphabet的值让数据从初次的空对象发生改变。在数据更新完毕后，就触发了updated钩子，此时给startY赋值就是值都有，而且只会赋一次。

**第二处：函数节流**

通过函数节流  减少handleTouchMove()的执行频率 （因为我们手指在滑动的时候  该函数执行频率很高的）。

怎样使得函数节流呢？

通过**定时器**和**清除定时器**来实现。

先在data中初始化timer为 null，然后这样来用

![](https://user-gold-cdn.xitu.io/2018/11/13/1670c77eceb8ee3a?w=967&h=401&f=png&s=75347)

这样子用定时器进行函数节流的话 ：

如果已经正在做这件事情的时候，我呢，让它延迟16ms之后再去执行。假设在这16ms之间你又去做了手指的滚动，那么它会把上一次你要做的操作给清除掉（clearTimeout），然后重新执行你这次要做的事情 （等于以最终的手指滑动的位置为准 ）。

通过这种函数节流方式，会大大减少该函数的执行次数，从而提高网页性能。

函数节流的方式，当一个函数执行次数很多想要减少而且减少也没影响的时候，是很有必要采用的一种方式。

### localStorage
可能用户会有不小的概率关闭了本地自动存储的功能，一般我们使用localStorage的时候   都要使用 try catch 代码块，这样就算用户关闭本地自动存储功能，也不会让整个代码都不能运行，只是没了这个localStorage的功能而已。

举个项目中的例子：

![](https://user-gold-cdn.xitu.io/2018/11/13/1670dbcb51fd2514?w=612&h=644&f=png&s=56870)

### 上篇结束，未完待续...

