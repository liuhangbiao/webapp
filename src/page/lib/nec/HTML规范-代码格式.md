### 说明文案的注释方法
采用类似标签闭合的写法，与HTML统一格式；注释文案两头空格，与CSS注释统一格式。

. 开始注释：<!-- 注释文案 -->（文案两头空格）。
. 结束注释：<!-- /注释文案 -->（文案前加“/”符号，类似标签的闭合）。
. 允许只有开始注释！
```
<!-- 头部 -->
<div class="g-hd">
    <!-- LOGO -->
    <h1 class="m-logo"><a href="#">LOGO</a></h1>
    <!-- /LOGO -->
    <!-- 导航 -->
    <ul class="m-nav">
        <li><a href="#">NAV1</a></li>
        <li><a href="#">NAV2</a></li>
        <!-- 更多导航项 -->
    </ul>
    <!-- /导航 -->
</div>
<!-- /头部 -->
```
### 代码本身的注释方法
单行代码的注释也保持同行，两端空格；多行代码的注释起始和结尾都另起一行并左缩进对齐。
```
<!-- <h1 class="m-logo"><a href="#">LOGO</a></h1> -->
<!--
<ul class="m-nav">
    <li><a href="#">NAV1</a></li>
    <li><a href="#">NAV2</a></li>
</ul>
-->
```
. 如果两个浮动元素之间存在注释，那么可能导致布局错位或文字的BUG。
. 所以，这种情况下，我们通常将注释去掉，或者索性采用模板语言（ftl、vm）的注释。
### 严格的嵌套
尽可能以最严格的xhtml strict标准来嵌套，比如内联元素不能包含块级元素等等。
正确闭合标签且必须闭合。
$### 严格的属性
属性和值全部小写，每个属性都必须有一个值，每个值必须加双引号。
没有值的属性必须使用自己的名称做为值（checked、disabled、readonly、selected等等）。
可以省略style标签和script标签的type属性。

### 常用的标签
常见标签表

| 标签 | 语义 |  嵌套常见错误 | 常用属性（加粗的为不可缺少的或建议的）|
| --------   | -----:  | :----:  |:----:  |
| &lt;a&gt;&lt;/a&gt;|超链接/锚|a不可嵌套a|href,name,title,rel,target|
| &lt;br /&gt;|换行|&nbsp;|&nbsp;|
| &lt;button&gt;&lt;/button&gt;|按钮|不可嵌套表单元素|type,disabled|
| &lt;dd&gt;&lt;/dd&gt;|定义列表中的定义（描述内容）|只能以dl为父容器，对应一个dt|&nbsp;|
| &lt;del&gt;&lt;/del&gt;|文本删除|&nbsp;|&nbsp;|
| &lt;div&gt;&lt;/div&gt;|块级容器|&nbsp;|&nbsp;|
| &lt;dl&gt;&lt;/dl&gt;|定义列表|只能嵌套dt和dd|&nbsp;|
| &lt;dt&gt;&lt;/dt&gt;|定义列表中的定义术语|只能以dl为父容器，对应多个dd|&nbsp;|
| &lt;em&gt;&lt;/em&gt;|强调文本|&nbsp;|&nbsp;|
| &lt;form&gt;&lt;/form&gt;|表单|&nbsp;|<em>action</em>,target,method,name|
| &lt;h1&gt;&lt;/h1&gt;|标题|从h1到h6，不可嵌套块级元素|&nbsp;|
| &lt;iframe&gt;&lt;/iframe&gt;|内嵌一个网页|&nbsp;|frameborder,width,height,src,scrolling,name|
| &lt;img /&gt;|图像|&nbsp;|<em>alt</em>,src,width,height|
| &lt;input /&gt;|各种表单控件|&nbsp;|<em>type</em>,name,value,checked,disabled,maxlength,readonly,accesskey|
| &lt;label&gt;&lt;/label&gt;|标签为input元素定义标注|&nbsp;|for|
| &lt;li&gt;&lt;/li&gt;|列表项|只能以ul或ol为父容器|&nbsp;|
| &lt;link /&gt;|引用样式或icon|不可嵌套任何元素|<em>type,rel</em>,href|
| &lt;meta /&gt;|文档信息|只用于head|content,http-equiv,name|
| &lt;ol&gt;&lt;/ol&gt;|有序列表|只能嵌套li|&nbsp;|
| &lt;option&gt;&lt;/option&gt;|select中的一个选项|仅用于select|<em>value</em>,selected,disabled|
| &lt;p&gt;&lt;/p&gt;|段落|不能嵌套块级元素|&nbsp;|
| &lt;script&gt;&lt;/script&gt;|引用脚本|不可嵌套任何元素|<em>type</em>,src|
| &lt;select&gt;&lt;/select&gt;|列表框或下拉框|只能嵌套option或optgroup|name,disabled,multiple|
| &lt;span&gt;&lt;/span&gt;|内联容器|&nbsp;|&nbsp;|
| &lt;strong&gt;&lt;/strong&gt;|强调文本|&nbsp;|&nbsp;|
| &lt;style&gt;&lt;/style&gt;|引用样式|不可嵌套任何元素|<em>type</em>,media|
| &lt;sub&gt;&lt;/sub&gt;|下标|&nbsp;|&nbsp;|
| &lt;sup&gt;&lt;/sup&gt;|上标|&nbsp;|&nbsp;|
| &lt;table&gt;&lt;/table&gt;|表格|只可嵌套表格元素|width,align,background,cellpadding,cellspacing,summary,border|
| &lt;tbody&gt;&lt;/tbody&gt;|表格主体|只用于table|&nbsp;|
| &lt;td&gt;&lt;/td&gt;|表格中的单元格|只用于tr|colspan,rowspan|
| &lt;textarea&gt;&lt;/textarea&gt;|多行文本输入控件|&nbsp;|name,accesskey,disabled,readonly,rows,cols|
| &lt;tfoot&gt;&lt;/tfoot&gt;|表格表尾|只用于table|&nbsp;|
| &lt;th&gt;&lt;/th&gt;|表格中的标题单元格|只用于tr|colspan,rowspan|
| &lt;thead&gt;&lt;/thead&gt;|表格表头|只用于table|&nbsp;|
| &lt;title&gt;&lt;/title&gt;|文档标题|只用于head|&nbsp;|
| &lt;tr&gt;&lt;/tr&gt;|表格行|嵌套于table或thead、tbody、tfoot|&nbsp;|
| &lt;ul&gt;&lt;/ul&gt;|无序列表|只能嵌套li|&nbsp;|