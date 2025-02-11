package com.blogs.exception_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.vikreta.dto.ApiResponse;


@RestControllerAdvice // = @ControllerAdvice + @ResponseBody . It is spring bean containing 
//centralized exception handling advice(logic)
public class GlobalExceptionHandler {
	//add exception handling methods => catch block
	@ExceptionHandler(com.vikreta.custom_exceptions.ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(com.vikreta.custom_exceptions.ResourceNotFoundException e)
	{
		System.out.println("in handle Resourcenot found exc ");
		return ResponseEntity.status(HttpStatus.NOT_FOUND)
				.body(new ApiResponse(e.getMessage(),false));
	}
	//add exception handling methods => catch blocks
		@ExceptionHandler(MethodArgumentNotValidException.class)
		public ResponseEntity<?> handleMethodArgumentNotValidException
		(MethodArgumentNotValidException e)
		{
			System.out.println("in handle P.L failures associated @Valid @RequestBody exc ");
			//get rejected field errors
			List<FieldError> rejectedFields = e.getFieldErrors();
			//FP approach
			Map<String, String> map = rejectedFields.stream() //Stream<FieldError>
			.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));//f -> f.getField() , f -> f.getDefaultMessage()
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(map);
		}
		//catch-all equivalent
		//add exception handling methods => catch blocks
		@ExceptionHandler(Exception.class)
		public ResponseEntity<?> handleAnyException(Exception e)
		{
			System.out.println("in catch-all ");
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage(),false));
		}
		
	

}
