package farizrifkyb.mini_cmdb.model.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class IpSimpleResponse {
    private Long id;  
    
    private String ipAddress;  

    private String hostname;

    private String description;
}
