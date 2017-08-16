### HTML基础设施
. 文件应以“<!DOCTYPE ......>”首行顶格开始，推荐使用“<!DOCTYPE html>”。
. 必须申明文档的编码charset，且与文件本身编码保持一致，推荐使用UTF-8编码<meta charset="utf-8"/>。
. 根据页面内容和需求填写适当的keywords和description。
. 页面title是极为重要的不可缺少的一项。
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>NEC：更好的CSS方案</title>
<meta name="keywords" content=""/>
<meta name="description" content=""/>
<meta name="viewport" content="width=device-width"/>
<link rel="stylesheet" href="css/style.css"/>
<link rel="shortcut icon" href="img/favicon.ico"/>
<link rel="apple-touch-icon" href="img/touchicon.png"/>
</head>
<body>
</body>
</html>
```
### 结构顺序和视觉顺序基本保持一致
. 按照从上至下、从左到右的视觉顺序书写HTML结构。
. 有时候为了便于搜索引擎抓取，我们也会将重要内容在HTML结构顺序上提前。
. 用div代替table布局，可以使HTML更具灵活性，也方便利用CSS控制。
. table不建议用于布局，但表现具有明显表格形式的数据，table还是首选。
### 结构、表现、行为三者分离，避免内联
. 使用link将css文件引入，并置于head中。
. 使用script将js文件引入，并置于body底部。
### 保持良好的简洁的树形结构
. 每一个块级元素都另起一行，每一行都使用Tab缩进对齐（head和body的子元素不需要缩进）。删除冗余的行尾的空格。
. 使用4个空格代替1个Tab（大多数编辑器中可设置）。
. 对于内容较为简单的表格，建议将tr写成单行。
. 你也可以在大的模块之间用空行隔开，使模块更清晰。
```
<body>
<!-- 侧栏内容区 -->
<div class="m-side">
    <div class="side">
        <div class="sidein">
            <!-- 热门标签 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">热门标签</h3> </div>
                ...
            </div>
            <!-- 最热TOP5 -->
            <div class="sideblk">
                <div class="m-hd3"><h3 class="tit">最热TOP5</h3> <a href="#" class="s-fc02 f-fr">更多»</a></div>
                ...
            </div>
        </div>
    </div>
</div>
<!-- /侧栏内容区 -->
</body>
```
. 另外，请做到以下几点
结构上如果可以并列书写，就不要嵌套。
如果可以写成`<div></div><div></div>`那么就不要写成`<div><div></div></div>`

. 如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。
比如`<div><h2></h2></div>`已经能满足要求，那么就不要再写成`<div><div><h2></h2></div></div>`

. 一个标签上引用的className不要过多，越少越好。
比如不要出现这种情况：`<div class="class1 class2 class3 class4"></div>`

. 对于一个语义化的内部标签，应尽量避免使用className。
比如在这样一个列表中，li标签中的itm应去除：`<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>`