# aspirantes-mir-javascriptElena@DESKTOP-6F2NBCD MINGW64 ~ (master)
$ cd ejercicios

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ pwd
/c/Users/Elena/ejercicios

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ mkdir ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ cd ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ pwd
/c/Users/Elena/ejercicios/ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ code.
bash: code.: command not found

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ code .

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git clone ^[[200~https://github.com/juanbadan3/aspirantes-mir-html-y-css.git~
Cloning into 'aspirantes-mir-html-y-css.git~'...
fatal: protocol '?[200~https' is not supported

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git clone
fatal: You must specify a repository to clone.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --reject-shallow      don't clone shallow repository
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    --recursive ...       alias of --recurse-submodules
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to follow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    --server-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering
    --also-filter-submodules
                          apply partial clone filters to submodules
    --remote-submodules   any cloned submodules will use their remote-tracking branch
    --sparse              initialize sparse-checkout file to include only files at root
    --bundle-uri <uri>    a URI for downloading bundles before fetching from origin remote


Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git clone https://github.com/juanbadan3/aspirantes-mir-javascript.git
Cloning into 'aspirantes-mir-javascript'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git checkout -b develop}
Switched to a new branch 'develop}'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop})
$ mkdir js-1

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop})
$ code .

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop})
$ git commit "solucion a los ejercicios js"
error: pathspec 'solucion a los ejercicios js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop})
$ pwd
/c/Users/Elena/ejercicios/ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop})
$ git checkout master
Switched to branch 'master'
M       README.md/README.md

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit "solucion a los ejercicios js"
error: pathspec 'solucion a los ejercicios js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ gitt add
bash: gitt: command not found

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../README.md/README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../README.md/index.html
        ../ejercicio/
        ../ejercicio3/
        ./

no changes added to commit (use "git add" and/or "git commit -a")

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add ejercicio
fatal: pathspec 'ejercicio' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add ejercicio6
fatal: pathspec 'ejercicio6' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ pwd
/c/Users/Elena/ejercicios/ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add readme.md
fatal: pathspec 'readme.md' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ dit add ejercicio
bash: dit: command not found

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git checkout develop
error: pathspec 'develop' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git checkout -b develop
Switched to a new branch 'develop'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ git status
On branch develop
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../README.md/README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../README.md/index.html
        ../ejercicio/
        ../ejercicio3/
        ./

no changes added to commit (use "git add" and/or "git commit -a")

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ git add ejercicio3
fatal: pathspec 'ejercicio3' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ got add readme.md
bash: got: command not found

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ git commit "resuelstyo js"
error: pathspec 'resuelstyo js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ git status
On branch develop
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../README.md/README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../README.md/index.html
        ../ejercicio/
        ../ejercicio3/
        ./

no changes added to commit (use "git add" and/or "git commit -a")

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (develop)
$ git checkout master
Switched to branch 'master'
M       README.md/README.md

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git merge develop
Already up to date.

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../README.md/README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../README.md/index.html
        ../ejercicio/
        ../ejercicio3/
        ./

no changes added to commit (use "git add" and/or "git commit -a")

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit "ejercicios resueltos js"
error: pathspec 'ejercicios resueltos js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ pwd
/c/Users/Elena/ejercicios/ejercicio6

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add aspirantes-mir-javascrip
fatal: pathspec 'aspirantes-mir-javascrip' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add conditionals.js

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add hello.js

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add IMC.js

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git add sum.js

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit "ejercicios resueltos js "
error: pathspec 'ejercicios resueltos js ' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   IMC.js
        new file:   conditionals.js
        new file:   hello.js
        new file:   sum.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../README.md/README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        ../README.md/index.html
        ../ejercicio/
        ../ejercicio3/
        aspirantes-mir-javascript/


Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit IMC,js "ejercicios resueltos js"
error: pathspec 'IMC,js' did not match any file(s) known to git
error: pathspec 'ejercicios resueltos js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit IMS.js "ejercicios resueltos js"
error: pathspec 'IMS.js' did not match any file(s) known to git
error: pathspec 'ejercicios resueltos js' did not match any file(s) known to git

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$ git commit -m "ejercicios resueltos js"
[master 0693dc0] ejercicios resueltos js
 4 files changed, 22 insertions(+)
 create mode 100644 ejercicio6/IMC.js
 create mode 100644 ejercicio6/conditionals.js
 create mode 100644 ejercicio6/hello.js
 create mode 100644 ejercicio6/sum.js

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio6 (master)
$
