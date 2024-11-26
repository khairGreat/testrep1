try :
    
    import django
    message : str = f'current version: {django.__version__}'
    print(message)
except ImportError as error : 
    print ( error )