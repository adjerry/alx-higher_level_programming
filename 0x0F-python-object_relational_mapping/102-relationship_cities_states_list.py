#!/usr/bin/python3
'''
Lists all State objects, and corresponding City objects
from the database hbtn_0e_100_usa
'''

from sys import argv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from relationship_state import Base, State
from relationship_city import City


if __name__ == "__main__":

    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'.
                           format(argv[1], argv[2], argv[3],
                           pool_pre_ping=True))

    Session = sessionmaker(bind=engine)
    session = Session()

    st = session.query(State).join(City).order_by(City.id).all()

    for city in st:
        for city in state.cities:
            print("{}: {} -> {}".format(city.id, city.name, state.name))
