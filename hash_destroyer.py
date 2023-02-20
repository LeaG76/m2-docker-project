import hashlib
import random
import string
import time
# get a list of words from the dictionary
words = open('/usr/share/dict/words').read().split()
# remove the words that have more than 5 characters
words = [word for word in words if len(word) <= 5]
# sample for testing , comment words=sample to use the whole dictionary
sample=words[0:100]
words=sample
# dict to store the hashes and the words
hashes = {}
# hash the words and store them in an array
for word in words:
    word = word.encode('utf-8')
    hashes.update({word: hashlib.md5(word).digest()})
# generate random hashes and compare them to the ones in the array
breaked_hash = {}
# start the timer
start_time = time.time()
while True:
    # break those hashes!
    # generate random words that have a number of characters between 1 and 5
    random_word = ''.join(random.choice(string.ascii_letters) for i in range(random.randint(1, 5)))
    random_hash = hashlib.md5(random_word.encode('utf-8')).digest()
    # compare the random hash to the hashes in the array
    if random_hash in list(hashes.values()):        
        word = list(hashes.keys())[list(hashes.values()).index(random_hash)]
        print('Found a match!')
        print(f'{word}= {random_hash}')
        breaked_hash.update({word: random_hash})
        hashes.pop(word)
        if len(breaked_hash) == len(hashes):
            print('All hashes have been broken!')
            break
# end the timer
end_time = time.time()
print(f'Time elapsed in second {(end_time - start_time) * 1000}')
