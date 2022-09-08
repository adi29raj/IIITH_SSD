DELIMITER $$
CREATE PROCEDURE `2SUM`(
	IN `n1` INT,
	IN `n2` INT,
	OUT `result` INT
)
BEGIN
	Set result = n1 + n2;
END$$

DELIMITER ;

Call 2SUM(2,3,@sum);
SELECT @sum;
