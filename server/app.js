const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(requestListener);

async function requestListener(req, res) {
  const a = await handleStaticSource(req, res);
  switch (req.method) {
    case 'POST':
      await handlePOST(req, res);
      return;
    default:
      res.writeHead(404, 'Not Found');
      res.end();
  }
}

async function handlePOST(req, res) {
  req.on('data', chunk => {
    debugger;
  });
}

/**
 * 根据req.url判断请求的是否是静态资源
 *  如果是静态资源，则直接返回对应的静态文件
 * @param {*} req
 * @param {*} res
 */
function handleStaticSource(req, res) {
  return new Promise(resolve => {
    // 静态文件存放目录
    const staticPath = path.join(__dirname, 'static');
    const url = req.url === '/' ? '/index.html' : req.url;
    // 被请求的文件路径
    const filePath = path.join(staticPath, url);
    // 请求的文件路径后缀名
    const ext = filePath.split('.').pop();
    const staticExt = ['html', 'js', 'css'];
    const contentType = {
      html: 'text/html',
      js: 'text/javascript',
      css: 'text/css'
    };
    if (staticExt.indexOf(ext) !== -1) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.end(err.message);
          return;
        }
        res.writeHead(200, 'OK', {
          'Content-Type': contentType[ext]
        });

        res.end(data);
      });
    } else {
      resolve();
    }
  });
}

server.listen(9002, () => {
  console.log('Server start on http://localhost:9002');
});
