import '@testing-library/jest-dom';
import getHelpUin from '../../lib/getHelpUin';

describe('get help UIN', () => {
  it('test solve with first mask', () => {
    expect(getHelpUin('035604301011911110002300')).toMatch(
      '0356043010119111100023005'
    );
  });
  it('test solve with second mask', () => {
    expect(getHelpUin('1881013619111100103')).toMatch('18810136191111001035');
  });
});
