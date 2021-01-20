# Angular Phonecat Hybrid

This project is the [AngularJS Phonecat tutorial project](https://github.com/angular/angular-phonecat)
converted to a Angular CLI project and hybrid bootstrapped with Angular 4.x.

It started out as a regular Angular CLI project created with

    $ ng new angular-phonecat-hybrid
    
After that the `app` catalogue from the [AngularJS Phonecat tutorial project](https://github.com/angular/angular-phonecat)
was copied into the `src/app-ajs` catalogue of this project and `bower_components` was removed.

At this state the project was committed and the git tag `initial` was set. 

Then all changes needed to make that phonecat work as a hybrid was done
and committed. The git tag `converted-and-hybrid-bootstrapped` corresponds
to this state. 

The master branch is a working hybrid Phonecat application that can be run with

    $ npm start
    
