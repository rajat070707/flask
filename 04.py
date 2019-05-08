from flask import Flask
app = Flask(__name__)

@app.route('/<int:postID>/<float:revNo>')
def show_blog(postID):
    return 'Blog Number %d' % postID
    return 'Revision Number %f' % revNo

# @app.route('/rev/<float:revNo>')
# def revision(revNo):
#     return 'Revision Number %f' % revNo

if __name__ == '__main__':
    app.run()