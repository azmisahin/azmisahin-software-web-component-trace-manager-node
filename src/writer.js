/**
 * Write message
 *
 */
class Writer {

  /**
   *
   * @param {string} message Message body
   * @param {string} state Message type
   * state : Debug | Info | Warning | Error
   * */
  constructor(message, state) {
    this.Value = ''
    this.Message = message ? message : state
    this.State = state
    switch (state) {

    /// Purple
    case 'Debug':
      this.Value = '\x1b[35m%s\x1b[0m'
      break

      /// Blue
    case 'Info':
      this.Value = '\x1b[36m%s\x1b[0m'
      break

      /// Yellow
    case 'Warning':
      this.Value = '\x1b[33m%s\x1b[0m'
      break

      /// Red
    case 'Error':
      this.Value = '\x1b[31m%s\x1b[0m'
      break

      /// White
    default:
      this.Value = '\x1b[1m%s\x1b[0m'
      break

    }
    console.log(this.Value, this.Message)
    return this.Message
  }
}

module.exports = Writer
