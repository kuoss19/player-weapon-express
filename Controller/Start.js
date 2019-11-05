import express from 'express'
import ejs from 'ejs'

// --experimental-modules 사용하면 __dirname 안먹혀서 직접정의함
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url));

var app = express();

//ejs엔진으로 렌더링 설정 및 읽어올 파일 경로
app.set('views',__dirname+'/../View/');
app.set('view engine','ejs');
app.engine('html',ejs.renderFile);

// POST 방식에서는 JSON으로 데이터를 주고받는데, 이를 읽어주기 위한 설정
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

import {router as input_Page} from './inputRouter.js'
import {router as battle_Page} from './battleRouter.js'
app.use('/',input_Page);
app.use('/',battle_Page);

// 서버가동
app.listen(8081);