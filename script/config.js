//根目录新建 script/config.js
export const openApi =  [
        {
            requestLibPath: "import request from '@/utils/MyAnxios.ts'", // 想怎么引入封装请求方法
            schemaPath:'http://101.34.50.125:8990/api/v2/api-docs', // openAPI规范地址
            projectName: 'open-bff-patent', // 生成到哪个目录内
            apiPrefix: '"/open-bff-patent"',// 需不需要增加前缀
            serversPath: './src/generateApis', // 生成代码到哪个目录
        }
    ]


