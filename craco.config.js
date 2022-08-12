const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@': path.resolve(__dirname, 'src/'),
            '@api': path.resolve(__dirname, 'app/api/'),
            '@store': path.resolve(__dirname, 'src/app/store/'),
            '@types': path.resolve(__dirname, 'src/app/types/'),
            '@pages': path.resolve(__dirname, 'src/components/pages/'),
            '@context': path.resolve(__dirname, 'src/contexts/'),
            '@utilites': path.resolve(__dirname, 'src/utilites'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
        },
    },
    jest: {
        configure: {
            globals: {
                CONFIG: true,
            },
            moduleNameMapper: {
                '^@components/(.*)$': '<rootDir>/src/components$1',
                '^@/(.*)$': '<rootDir>/src/$1',
                '^@api/(.*)$': '<rootDir>/app/api$1',
                '^@store/(.*)$': '<rootDir>/src/app/store$1',
                '^@types/(.*)$': '<rootDir>/src/app/types$1',
                '^@pages/(.*)$': '<rootDir>/src/components/pages$1',
                '^@context/(.*)$': '<rootDir>/src/contexts$1',
                '^@utilites/(.*)$': '<rootDir>/src/utilites$1',
                '^@styles/(.*)$': '<rootDir>/src/styles$1',
                '^@routes/(.*)$': '<rootDir>/src/routes$1',
            },
        },
    },
};
