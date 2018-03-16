BUILD = npm run build
DELETEFILES = rm -rf /tmp/dist
COPYBUILD = cp -a dist /tmp/dist
CHECKOUT = git checkout gh-pages
PASTEBUILD = cp -a /tmp/dist/ .

demo:
	$(BUILD); $(DELETEFILES); $(COPYBUILD); $(CHECKOUT); $(PASTEBUILD)
