exports.config = {
    runner: 'local',
    specs: ['./test/specs/**/*.js'],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Medium_Phone_API_36.0',
            'appium:platformVersion': '16',
            'appium:automationName': 'UiAutomator2',
            'appium:app': './apps/Android-MyDemoAppRN.1.3.0.build-244.apk',
            'appium:autoGrantPermissions': true
        },
       {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 15',
            'appium:platformVersion': '17.5',
            'appium:automationName': 'XCUITest',
            'appium:app': './apps/MyRNDemoApp.app',
            'appium:autoAcceptAlerts': true
        }
    ],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    services: ['appium'],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
};