module.exports = {
  name: 'ui-web-layout-material',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui/web-layout-material',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
