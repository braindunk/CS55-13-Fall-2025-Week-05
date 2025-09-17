import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'posts');

export function getAllPostIds() {
  const filePath = path.join(dataDir, 'posts.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  });
}

export function getSortedPostsData() {
  const filePath = path.join(dataDir, 'posts.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  jsonObj.sort(function (a, b) {
      return a.title.localeCompare(b.name);
  });

  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      title: item.title,
      date: item.date
    }
  });
}

export async function getPostData(id) {
  const filePath = path.join(dataDir, 'posts.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  const objReturned = jsonObj.filter(obj => {
    return obj.id.toString() === id;
  });
  
  if (objReturned.length === 0) {
    return {
      id: id,
      title: 'No Post Found',
      date: '2025-01-01'
    }
  } else {
    return objReturned[0];
  }

}