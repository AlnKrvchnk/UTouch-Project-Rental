const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components/'),
            '@': path.resolve(__dirname, 'src/'),
            '@Api': path.resolve(__dirname, 'app/api/'),
            '@Store': path.resolve(__dirname, 'src/app/store/'),
            '@Types': path.resolve(__dirname, 'src/app/types/'),
            '@Pages': path.resolve(__dirname, 'src/components/pages/'),
            '@Context': path.resolve(__dirname, 'src/contexts/'),
            '@Styles': path.resolve(__dirname, 'src/styles/'),
        },
    },
    jest: {
        configure: {
            globals: {
                CONFIG: true,
            },
            moduleNameMapper: {
                '^@Components/(.*)$': '<rootDir>/src/components$1',
                '^@/(.*)$': '<rootDir>/src/$1',
                '^@Api/(.*)$': '<rootDir>/app/api$1',
                '^@Store/(.*)$': '<rootDir>/src/app/store$1',
                '^@Types/(.*)$': '<rootDir>/src/app/types$1',
                '^@Pages/(.*)$': '<rootDir>/src/components/pages$1',
                '^@Context/(.*)$': '<rootDir>/src/contexts$1',
                '^@Styles/(.*)$': '<rootDir>/src/styles$1',
            },
        },
    },
};
