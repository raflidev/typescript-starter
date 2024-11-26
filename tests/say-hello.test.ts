import { sayHello } from "../src/say-hello"

describe('sayHello', function (): void {
  it('should return hello rafli', function (): void {
    expect(sayHello('rafli')).toBe('Hello rafli')
  })
}) 