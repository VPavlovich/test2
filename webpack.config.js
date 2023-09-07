let webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    // module: {
    //     rules: [
    //             {
    //                 test: /\.less$/,
    //                 loader: 'style|css|less'
    //             }
    //         ]
    // },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {loader: 'less-loader'},
                ],
            },
        ],
    }
};
