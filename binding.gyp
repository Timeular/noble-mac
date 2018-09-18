{
  'targets': [
    {
      'target_name': 'noble-mac-native',
      'sources': [ 'src/noble_mac.mm', 'src/napi_objc.mm', 'src/ble_manager.mm', 'src/objc_cpp.mm', 'src/callbacks.cc'  ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")", "<!@(node -p \"require('napi-thread-safe-callback').include\")"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7',
        'OTHER_CFLAGS': [
            '-fobjc-arc',
        ],
      },
      'link_settings': {
        'libraries': [
          '$(SDKROOT)/System/Library/Frameworks/CoreBluetooth.framework',
        ]
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      }
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "noble-mac-native" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/noble-mac-native.node" ],
          "destination": "build/<(CONFIGURATION_NAME)"
        },
      ]
    }
  ]
}
