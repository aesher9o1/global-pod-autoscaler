import winston, { format } from 'winston'
import winstonTimestampColorize from 'winston-timestamp-colorize'
import dotenv from 'dotenv'

const WINSTON_COLORS = {
  error: 'brightRed',
  warn: 'brightYellow',
  info: 'brightCyan',
  verbose: 'brightWhite',
  debug: 'brightBlue',
  silly: 'brightMagenta'
}

dotenv.config()
winston.format.colorize().addColors(WINSTON_COLORS)

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.simple(),
        winstonTimestampColorize({ color: 'green' }),
        format.printf((msg) => `${msg.level}: ${msg.message} - ${msg.timestamp}`)
      )
    })
  ]
}

const logger = winston.createLogger(options)

export default logger
