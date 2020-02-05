var data = {lines:[
{"lineNum":"    1","line":" #!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"trap \'echo \"kcov@${BASH_SOURCE}@${LINENO}@\" >&$KCOV_BASH_XTRACEFD\' DEBUG","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":"unset BASH_ENV","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "test.sh", "date" : "2020-02-05 18:55:21", "instrumented" : 2, "covered" : 0,};
var merged_data = [];
