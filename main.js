/***********************************************************************
This is the node.js local harness to write out the spiritual mapping language
interpreter.
***********************************************************************/
var fs=require('fs');
// reads in input files
var args=require('yargs').argv;
var infile=args.g;
var indata=args.d;
if(infile===undefined){throw new Error("Usage: -g generator.txt required");}
else{infile=fs.readFileSync(infile).toString().split("\n");}
if(indata===undefined){throw new Error("Usage: -d dataset required");}
var ppg=require('./powerpoint-generator');
var ast=ppg.genast(infile);
