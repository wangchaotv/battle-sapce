const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const nodeApiPage = 'https://nodejs.org/api/';

/**
 * 下载API概览页，获取模块列表和对应的href
 */
async function start() {
  const doc = await rp.get(nodeApiPage);
  const hrefList = parseModuleList(doc);
  const promises = hrefList.map(href => {
    return parseModuleApi(href);
  });

  const ret = await Promise.all(promises);
  fs.writeFile(path.join(__dirname, 'api.html'), ret.join('<br />'), () => {});
}

async function parseModuleApi(href) {
  try {
    const doc = await rp.get(href);
    const $ = cheerio.load(doc);
    const text = $('#toc').html();
    return text;
  } catch (error) {
    console.error(error);
  }
}

function parseModuleList(doc) {
  const hrefList = [];
  const $ = cheerio.load(doc);
  let moduleList = $('#apicontent>ul:nth-child(3)>li');
  Array.prototype.forEach.call(moduleList, li => {
    const a = $(li).find('a');
    const href = `${nodeApiPage}${a.attr('href')}`;
    hrefList.push(href);
  });
  return hrefList;
}

start();
