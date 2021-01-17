import * as webpack from 'webpack'

const config: webpack.Configuration = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['ts-loader', 'eslint-loader']
            },
        ]
    }
}

export default config