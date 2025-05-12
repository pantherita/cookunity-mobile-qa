# CookUnity - Mobile QA Automation Challenge

This project is configured to run Appium tests using WebDriverIO for both Android and iOS.

## Requirements

- Node.js 18+
- Appium v2
- Android SDK
- Xcode

## Setup

1. Install Node modules:
```bash
npm install
```

2. Install Appium drivers:
```bash
appium driver install uiautomator2
appium driver install xcuitest
```

3. Add Android/iOS app files into `apps/` directory:
   - `iOS-Real-Device-MyRNDemoApp.1.3.0-162.ipa`
   - `Android-MyDemoAppRN.1.3.0.build-244.apk`
   - `MyRNDemoApp.app` (for iOS Simulator)

4. Set up environment variables:
```bash
# For Android
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# For Java
export JAVA_HOME=$(/usr/libexec/java_home)
```

## Running Tests

### Android Tests

1. Start Android Emulator:
```bash
# List available emulators
emulator -list-avds

# Start the configured emulator
emulator -avd Medium_Phone_API_36.0
```

2. Start Appium server:
```bash
appium
```

3. Run Android tests:
```bash
npm test
```

### iOS Tests

1. Start iOS Simulator:
```bash
# List available simulators
xcrun simctl list devices

# Start the configured simulator
open -a Simulator --args -CurrentDevice "iPhone 15"
```

2. Start Appium server:
```bash
appium
```

3. Run iOS simulator tests:
```bash
npm test
```

## Test Structure

- Test files are located in `test/specs/`
- Page objects are in `test/pageobjects/`
- Configuration is in `wdio.conf.js`

## Troubleshooting

### Node Version Error:
If you see `stripVTControlCharacters` error:
```bash
nvm install 18
nvm use 18
```

### Android Issues:
- Make sure Android SDK is properly installed
- Verify ANDROID_HOME environment variable is set
- Check that an Android emulator is running or a device is connected

### iOS Issues:
- Ensure Xcode is installed and up to date
- Verify WebDriverAgent is properly signed
- Check that the device is trusted and unlocked

### Appium Issues:
- Run `appium doctor` to check for configuration issues
- Verify Appium server is running
- Check that the correct drivers are installed# cookunity-mobile-qa
