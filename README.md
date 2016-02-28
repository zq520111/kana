# hexo theme kana

[Preview](https://bigfa.github.io/kana/)

## 主题介绍
+ 响应式
+ 独立的分类、标签页面
+ 文章归档、带缩略图的分类归档、标签归档
+ 可控制动画效果的开关
+ 文章列表头像显示开关
+ 更多...

## 依赖插件
+ hexo-front-matter-excerpt
+ hexo-generator-archive
+ hexo-generator-category
+ hexo-generator-feed
+ hexo-generator-tag
+ hexo-renderer-less

## 主题安装

### 安装

```
$ git clone https://github.com/bigfa/kana.git themes/kana

```

### 开启

修改 `_config.yml` 主题设置为`kana`

### 更新

```
cd themes/kana
git pull

```

## 推荐配置

建议关闭年月日归档，所有文章归档为全部文章输出，单页文章设置无效。

建议规避代码高亮，主题仅提供了默认pre标签样式

主题支持文章摘要，可安装摘要插件。

### 分类缩略图设置

修改less文件，你有几个分类就把n设置为几，然后安扎你的分类顺序设置图片。

其他都是Hexo　基本配置了，感谢支持。