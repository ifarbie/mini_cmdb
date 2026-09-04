package farizrifkyb.mini_cmdb.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import farizrifkyb.mini_cmdb.model.response.WebResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public WebResponse<Void> handleResourceNotFound(
            ResourceNotFoundException exception) {

        return WebResponse.<Void>builder()
                .errors(exception.getMessage())
                .build();
    }

}