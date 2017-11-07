﻿/*
	DuBinary Converter
  Small tool to convert binary files in a folder (and subfolders) to include files .jsxinc
	Copyright (c) 2017 Nicolas Dufresne, Rainbox Productions
	https://rainboxprod.coop
*/

(function ()
{

  #include "../DuAEF.jsxinc"

  var file = File.openDialog ("Select File");
  if (!file) return;

  DuAEF.DuBinary.convertToIncludeFile(file);

})();
