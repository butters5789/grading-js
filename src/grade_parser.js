exports.getMovements = function(grades) {
    var analytics = [];

    for (i = 0; i < grades.length; i++) {
        var now = grades[i];
        var next = grades[i + 1];
        if (now > next) {
            now = 'down';
            analytics.push(now);
        } else if (now === next) {
            now = 'even';
            analytics.push(now);
        } else if (now < next) {
            now = 'up';
            analytics.push(now);
        }
    }

    return analytics;
};

exports.inDecline = function(grades) {
    if (grades.length < 2) {
        return false;
    } else {
        var analytics = [];

        for (i = 0; i < grades.length; i++) {
            var now = grades[i];
            var next = grades[i + 1];
            if (now > next) {
                now = 'down';
                analytics.push(now);
            } else if (now === next) {
                now = 'even';
                analytics.push(now);
            } else if (now < next) {
                now = 'up';
                analytics.push(now);
            }
        }

        var counter = 0;

        analytics.map(function(grade) {
            if (grade === 'down') {
                counter++;
            } else if (grade === 'up') {
                counter = 0;
            }
        });

        if (counter > 2) {
            return true;
        } else if (counter < 3) {
            return false;
        }
    }
};
