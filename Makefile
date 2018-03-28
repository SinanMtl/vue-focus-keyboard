BUILD_DEMO = npm run demo
DELETEFILES = rm -rf /tmp/demo
COPYBUILD = cp -a demo /tmp/demo
CHECKOUT = git checkout gh-pages
PASTEBUILD = cp -a /tmp/demo/ .

.PHONY: demo
demo:
	$(BUILD_DEMO); $(DELETEFILES); $(COPYBUILD); $(CHECKOUT); $(PASTEBUILD);
