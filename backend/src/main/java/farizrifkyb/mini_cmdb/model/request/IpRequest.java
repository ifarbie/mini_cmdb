package farizrifkyb.mini_cmdb.model.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IpRequest {
    @NotBlank
    @Size(max = 100)
    @JsonProperty("ip_address")
    private String ipAddress;

    @NotBlank
    @Size(max = 50)
    private String hostname;

    private String description;
}
