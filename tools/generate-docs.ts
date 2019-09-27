const { echo, rm, cp, mv } = require('shelljs')

echo('Copying API Docs !!!')
cp('-R', 'api', 'docs')
echo('Removing API Docs !!!')
rm('-rf', 'api')
rm('-f', 'docs/api/README.md')
mv('docs/api/globals.md', 'docs/api/README.md')
