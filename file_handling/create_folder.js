import fs from "fs";
import path from "path";
let createFolder = async  (subFolderPAth) => {
  try{
      const __dirname = path.resolve();
      let dir = __dirname + '/uploads/';


      dir = dir + subFolderPAth;
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
      }
      if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, {
              mode: 0o744,
          });
      }
      // await  fs.mkdirSync(__dirname + '/uploads/');
  }
  catch (e){

      console.log(e);
  }
};

export default createFolder ;




