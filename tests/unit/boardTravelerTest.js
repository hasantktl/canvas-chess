QUnit.module('BoardTraveler');

QUnit.test('Travel an empty board', function (assert) {
    var action,
        boardTraveler,
        fen,
        fromSquare,
        position,
        visitedSquaresActual,
        visitedSquaresExpected;

    fen = '8/8/8/8/8/8/8/8 w KQkq - 0 1',
    position = new CHESS.Position(fen);
    fromSquare = new CHESS.Square('e4');
    boardTraveler = new CHESS.BoardTraveler(position, fromSquare);
    action = function (newSquare) {
        visitedSquaresActual.push(newSquare.getName());
    }

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'f5', 'g6', 'h7', 'd5', 'c6',
        'b7', 'a8', 'f3', 'g2', 'h1',
        'd3', 'c2', 'b1'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.BISHOP, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a bishop');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'a4', 'b4', 'c4', 'd4', 'e1',
        'e2', 'e3', 'e5', 'e6', 'e7',
        'e8', 'f4', 'g4', 'h4'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.ROOK, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a rook');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'a4', 'a8', 'b1', 'b4',
        'b7', 'c2', 'c4', 'c6',
        'd3', 'd4', 'd5', 'e1',
        'e2', 'e3', 'e5', 'e6',
        'e7', 'e8', 'f3', 'f4',
        'f5', 'g2', 'g4', 'g6',
        'h1', 'h4', 'h7'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.QUEEN, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a queen');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'd5', 'e5', 'f5', 'd4',
        'f4', 'd3', 'e3', 'f3'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.KING, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a king');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'c3', 'c5', 'd2', 'd6',
        'f2', 'f6', 'g3', 'g5'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.KNIGHT, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a knight');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'd5', 'e5', 'e6', 'f5'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.WHITE_PAWN, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a black pawn');

    visitedSquaresActual = [];
    visitedSquaresExpected = [
        'd3', 'e3', 'e2', 'f3'
    ];
    boardTraveler.travelBoardAs(CHESS.BoardTraveler.BLACK_PAWN, action);
    visitedSquaresActual.sort();
    visitedSquaresExpected.sort();
    assert.deepEqual(visitedSquaresActual, visitedSquaresExpected, 'Travel the board as a white pawn');

});
