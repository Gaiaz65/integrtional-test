import { greet } from "./func";
import { array } from './func';

describe ('greet', () => {
  it('should include name in the result', () => {
    expect(greet('Angular')).toContain('Angular')
  })
})


describe('array', () => {
  it('should return the array with numbers', () => {
    const result = array()
    expect(result).toContain(1)
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result.length).toBe(5);
  });
});
