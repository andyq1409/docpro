@echo off
echo --------- Copy to Java project---------------------------------------------------------------
echo delete c:\Workspace\code\java\demo\static\*.*
del /q c:\Workspace\code\java\demo\static\*.*
echo delete c:\Workspace\code\java\demo\target\static\*.*
del /q c:\Workspace\code\java\demo\target\static\*.*
echo copy to java static
xcopy /q c:\Workspace\code\angular\docpro\dist\docpro c:\Workspace\code\java\demo\static
echo copy to java target\static
xcopy /q c:\Workspace\code\angular\docpro\dist\docpro c:\Workspace\code\java\demo\target\static
echo --------- End copy --------------------------------------------------------------------------
