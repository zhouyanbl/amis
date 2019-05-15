define('docs/renderers/Video.md', function(require, exports, module) {

  module.exports = {
    "html": "<h3><a class=\"anchor\" name=\"video\" href=\"#video\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Video</h3><p>视频播放器。</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;video&quot;</code></td>\n<td>指定为 video 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>src</td>\n<td><code>string</code></td>\n<td></td>\n<td>视频地址</td>\n</tr>\n<tr>\n<td>poster</td>\n<td><code>string</code></td>\n<td></td>\n<td>视频封面地址</td>\n</tr>\n<tr>\n<td>muted</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否静音</td>\n</tr>\n<tr>\n<td>autoPlay</td>\n<td><code>boolean</code></td>\n<td></td>\n<td>是否自动播放</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 700px\"><script type=\"text/schema\" height=\"700\" scope=\"body\">{\n    \"type\": \"video\",\n    \"autoPlay\": false,\n    \"src\": \"raw:https://media.w3.org/2010/05/sintel/trailer_hd.mp4\",\n    \"poster\": \"raw:https://video-react.js.org/assets/poster.png\"\n}\n</script></div>\n",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Video",
          "fragment": "video",
          "fullPath": "#video",
          "level": 3
        }
      ],
      "level": 0
    }
  };

});
