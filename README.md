# Fons

> Control Ubuntu by CLI like a pro

Fons is a CLI that helps you to control Ubuntu like a pro.

## Commands

### Audio
  Control output and input audio devices

  Usage: `fons audio|a [options] [command]`

  Options:

`-h, --help`  display help for command

  **Sub Commands**:
  
  * `choose-ouput|co`   Choose default ouput device
    
    Show a selectable list to choose the output device

  * `set-ouput|so <id>` Set default output device

### Network
  Network information

  Usage: `fons network|n [options] [command]`

  Options:

`-h, --help`  display help for command

  **Sub Commands**:
  
  * `password|p`  Get Wifi password 

## System Info
To get system information for bug reports, run
```sh
    npm run info
```

## LICENCE

MIT
