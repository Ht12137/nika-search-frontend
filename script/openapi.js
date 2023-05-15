
import {generateService} from "@umijs/openapi";
//根目录新建 script/openapi.js

import { openApi } from './config.js'



async function run() {
    for (let index = 0; index < openApi.length; index++) {
        await generateService(openApi[index])
    }
}

run()