BUILD = npm run build
DELETEFILES = rm -rf /tmp/demo
COPYBUILD = cp -a demo /tmp/demo
CHECKOUT = git checkout gh-pages
PASTEBUILD = cp -a /tmp/demo/ .

demo:
	$(BUILD); $(DELETEFILES); $(COPYBUILD); $(CHECKOUT); $(PASTEBUILD)
