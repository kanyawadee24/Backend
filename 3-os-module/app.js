const path =  require('path');
// const result = path.dirname('project/folder/file');
// console.log(result);

// const result2 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// console.log(result2);

// const path =  require('path');
// const result = path.dirname('project/folder/pic.png');
// console.log(result);

// const result2 = path.join('/project', 'folder', 'user-image.jpg');
// console.log(result2);


const base = 'project/folder/pic.png';

const baseDir = path.dirname(base);
const savePath = path.join(baseDir, 'user-image.jpg');
console.log(savePath);